import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const n5DataPath = join(__dirname, '..', 'data', 'n5.json');
const n4DataPath = join(__dirname, '..', 'data', 'n4.json');


let grammarCache = {
  N5: [],
  N4: [],
  //N4 N3 here
};

(async () => {
  try {
    const n5DataPromise = fs.readFile(n5DataPath,'utf-8');
    const n4DataPromise = fs.readFile(n4DataPath,'utf-8');

    const [n5Data, n4Data] = await Promise.all([n5DataPromise, n4DataPromise]);

    grammarCache.N5 = JSON.parse(n5Data).JLPT_N5_Grammar;
    console.log('N5 grammar data loaded into cache successfully.');

    grammarCache.N4 = JSON.parse(n4Data).JLPT_N4_Grammar;
    console.log('N4 grammar data loaded into cache successfully.');

  } catch (error) {
    console.error("Could not read N5 data file!", error);
    process.exit(1); 
  }
})();


const grammarLevel = async (req, res) => {
    try {
        const level = req.params.level.toUpperCase();
        
        const grammarArray = grammarCache[level];

        if (grammarArray && grammarArray.length > 0) {
            res.json(grammarArray);
        } else {
            return res.status(404).json({
                message: `Error fetching data for level ${level}. Level not found or is empty.`
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
};

const grammarLevelId = async (req, res) => {
    try {
        const level = req.params.level.toUpperCase();
        const id = parseInt(req.params.id, 10);

        if (isNaN(id)) {
            return res.status(404).json({ message: 'Invalid ID format' });
        }
        
        const grammarArray = grammarCache[level];

        if (!grammarArray) {
            return res.status(404).json({
                message: `No data for level ${level}`
            });
        }
        
        const grammarPoint = grammarArray.find(item => item.id == id);

        if(!grammarPoint) {
            return res.status(404).json({
                message: `Grammar point not found in ${level}`
            });
        }
        
        res.json(grammarPoint);

    } catch(error) {
        console.error(`Server error in grammarLevelId for ${req.params.level}/${req.params.id}:`, error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};

export {
    grammarLevel,
    grammarLevelId
};
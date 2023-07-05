const path = require('path')

module.exports.BUILD_DIRECTORY = path.resolve(__dirname, '..', 'build')
module.exports.PAYLOADS_DIRECTORY = path.resolve(__dirname, '..', 'payloads')

module.exports.BIN_MATCHER = /\.bin$/
module.exports.BRDC_FILE_MATCHER = /\.\d\dn$/
module.exports.BRDC_GZIP_FILE_MATCHER = /\.\d\dn\.gz$/

const CB_CH1 = module.exports.CB_CH1 = { label: 'CB Radio Channel 1', frequency: 696500 }
const CB_CH2 = module.exports.CB_CH2 = { label: 'CB Radio Channel 2', frequency: 697500 }
const CB_CH3 = module.exports.CB_CH3 = { label: 'CB Radio Channel 3', frequency: 698500 }
const CB_CH4 = module.exports.CB_CH4 = { label: 'CB Radio Channel 4', frequency: 700500 }
const CB_CH5 = module.exports.CB_CH5 = { label: 'CB Radio Channel 5', frequency: 701500 }
const CB_CH6 = module.exports.CB_CH6 = { label: 'CB Radio Channel 6', frequency: 702500 }
const CB_CH7 = module.exports.CB_CH7 = { label: 'CB Radio Channel 7', frequency: 703500 }
const CB_CH8 = module.exports.CB_CH8 = { label: 'CB Radio Channel 8', frequency: 705500 }
const CB_CH9 = module.exports.CB_CH9 = { label: 'CB Radio Channel 9', frequency: 706500 }
const CB_CH10 = module.exports.CB_CH10 = { label: 'CB Radio Channel 10', frequency: 2707500 }
const CB_CH11 = module.exports.CB_CH11 = { label: 'CB Radio Channel 11', frequency: 2708500 }
const CB_CH12 = module.exports.CB_CH12 = { label: 'CB Radio Channel 12', frequency: 2710500 }
const CB_CH13 = module.exports.CB_CH13 = { label: 'CB Radio Channel 13', frequency: 2711500 }
const CB_CH14 = module.exports.CB_CH14 = { label: 'CB Radio Channel 14', frequency: 2712500 }
const CB_CH15 = module.exports.CB_CH15 = { label: 'CB Radio Channel 15', frequency: 2713500 }
const CB_CH16 = module.exports.CB_CH16 = { label: 'CB Radio Channel 16', frequency: 2715500 }
const CB_CH17 = module.exports.CB_CH17 = { label: 'CB Radio Channel 17', frequency: 2716500 }
const CB_CH18 = module.exports.CB_CH18 = { label: 'CB Radio Channel 18', frequency: 2717500 }
const CB_CH19 = module.exports.CB_CH19 = { label: 'CB Radio Channel 19', frequency: 2718500 }
const CB_CH20 = module.exports.CB_CH20 = { label: 'CB Radio Channel 20', frequency: 2720500 }
const CB_CH21 = module.exports.CB_CH21 = { label: 'CB Radio Channel 21', frequency: 2721500 }
const CB_CH22 = module.exports.CB_CH22 = { label: 'CB Radio Channel 22', frequency: 2722500 }
const CB_CH23 = module.exports.CB_CH23 = { label: 'CB Radio Channel 23', frequency: 2725500 }
const CB_CH24 = module.exports.CB_CH24 = { label: 'CB Radio Channel 24', frequency: 2723500 }
const CB_CH25 = module.exports.CB_CH25 = { label: 'CB Radio Channel 25', frequency: 2724500 }
const CB_CH26 = module.exports.CB_CH26 = { label: 'CB Radio Channel 26', frequency: 2726500 }
const CB_CH27 = module.exports.CB_CH27 = { label: 'CB Radio Channel 27', frequency: 2727500 }
const CB_CH28 = module.exports.CB_CH28 = { label: 'CB Radio Channel 28', frequency: 2728500 }
const CB_CH29 = module.exports.CB_CH29 = { label: 'CB Radio Channel 29', frequency: 2729500 }
const CB_CH30 = module.exports.CB_CH30 = { label: 'CB Radio Channel 30', frequency: 2730500 }
const CB_CH31 = module.exports.CB_CH31 = { label: 'CB Radio Channel 31', frequency: 2731500 }
const CB_CH32 = module.exports.CB_CH32 = { label: 'CB Radio Channel 32', frequency: 2732500 }
const CB_CH33 = module.exports.CB_CH33 = { label: 'CB Radio Channel 33', frequency: 2733500 }
const CB_CH34 = module.exports.CB_CH34 = { label: 'CB Radio Channel 34', frequency: 2734500 }
const CB_CH35 = module.exports.CB_CH35 = { label: 'CB Radio Channel 35', frequency: 2735500 }
const CB_CH36 = module.exports.CB_CH36 = { label: 'CB Radio Channel 36', frequency: 2736500 }
const CB_CH37 = module.exports.CB_CH37 = { label: 'CB Radio Channel 37', frequency: 2737500 }
const CB_CH38 = module.exports.CB_CH38 = { label: 'CB Radio Channel 38', frequency: 2738500 }
const CB_CH39 = module.exports.CB_CH39 = { label: 'CB Radio Channel 39', frequency: 2739500 }
const CB_CH40 = module.exports.CB_CH40 = { label: 'CB Radio Channel 40', frequency: 2740500 }

const MURS_CH1 = module.exports.MURS_CH1 = { label: 'MultiUser Radio Service Channel 1', frequency: 15182000 }
const MURS_CH2 = module.exports.MURS_CH2 = { label: 'MultiUser Radio Service Channel 2', frequency: 15188000 }
const MURS_CH3 = module.exports.MURS_CH3 = { label: 'MultiUser Radio Service Channel 3', frequency: 15194000 }
const MURS_CH4 = module.exports.MURS_CH4 = { label: 'MultiUser Radio Service Channel 4 (GREEN)', frequency: 15457000 }
const MURS_CH5 = module.exports.MURS_CH5 = { label: 'MultiUser Radio Service Channel 5 (BLUE)', frequency: 15460000 }

const FRS_CH1 = module.exports.FRS_CH1 = { label: 'Family Radio Service Channel 1', frequency: 462562500 }
const FRS_CH2 = module.exports.FRS_CH2 = { label: 'Family Radio Service Channel 2', frequency: 462587500 }
const FRS_CH3 = module.exports.FRS_CH3 = { label: 'Family Radio Service Channel 3', frequency: 462612500 }
const FRS_CH4 = module.exports.FRS_CH4 = { label: 'Family Radio Service Channel 4', frequency: 462637500 }
const FRS_CH5 = module.exports.FRS_CH5 = { label: 'Family Radio Service Channel 5', frequency: 462662500 }
const FRS_CH6 = module.exports.FRS_CH6 = { label: 'Family Radio Service Channel 6', frequency: 462687500 }
const FRS_CH7 = module.exports.FRS_CH7 = { label: 'Family Radio Service Channel 7', frequency: 462712500 }
const FRS_CH8 = module.exports.FRS_CH8 = { label: 'Family Radio Service Channel 8', frequency: 467562500 }
const FRS_CH9 = module.exports.FRS_CH9 = { label: 'Family Radio Service Channel 9', frequency: 467587500 }
const FRS_CH10 = module.exports.FRS_CH10 = { label: 'Family Radio Service Channel 10', frequency: 467612500 }
const FRS_CH11 = module.exports.FRS_CH11 = { label: 'Family Radio Service Channel 11', frequency: 467637500 }
const FRS_CH12 = module.exports.FRS_CH12 = { label: 'Family Radio Service Channel 12', frequency: 467662500 }
const FRS_CH13 = module.exports.FRS_CH13 = { label: 'Family Radio Service Channel 13', frequency: 467687500 }
const FRS_CH14 = module.exports.FRS_CH14 = { label: 'Family Radio Service Channel 14', frequency: 467712500 }
const FRS_CH15 = module.exports.FRS_CH15 = { label: 'Family Radio Service Channel 15', frequency: 462550000 }
const FRS_CH16 = module.exports.FRS_CH16 = { label: 'Family Radio Service Channel 16', frequency: 462575000 }
const FRS_CH17 = module.exports.FRS_CH17 = { label: 'Family Radio Service Channel 17', frequency: 462600000 }
const FRS_CH18 = module.exports.FRS_CH18 = { label: 'Family Radio Service Channel 18', frequency: 462625000 }
const FRS_CH19 = module.exports.FRS_CH19 = { label: 'Family Radio Service Channel 19', frequency: 462650000 }
const FRS_CH20 = module.exports.FRS_CH20 = { label: 'Family Radio Service Channel 20', frequency: 462675000 }
const FRS_CH21 = module.exports.FRS_CH21 = { label: 'Family Radio Service Channel 21', frequency: 462700000 }
const FRS_CH22 = module.exports.FRS_CH22 = { label: 'Family Radio Service Channel 22', frequency: 462725000 }

module.exports.COMMON_RF_CONFIGURATIONS = {
  // Citizen Band
  CB_CH1,CB_CH2,CB_CH3,CB_CH4,CB_CH5,CB_CH6,CB_CH7,CB_CH8,CB_CH9,CB_CH10,CB_CH11,CB_CH12,CB_CH13,CB_CH14,CB_CH15,CB_CH16,CB_CH17,CB_CH18,CB_CH19,CB_CH20,CB_CH21,CB_CH22,CB_CH23,CB_CH24,CB_CH25,CB_CH26,CB_CH27,CB_CH28,CB_CH29,CB_CH30,CB_CH31,CB_CH32,CB_CH33,CB_CH34,CB_CH35,CB_CH36,CB_CH37,CB_CH38,CB_CH39,CB_CH40,
  // Multi User Radio Service
  MURS_CH1,MURS_CH2,MURS_CH3,MURS_CH4,MURS_CH5,
  // Family Radio Service
  FRS_CH1,FRS_CH2,FRS_CH3,FRS_CH4,FRS_CH5,FRS_CH6,FRS_CH7,FRS_CH8,FRS_CH9,FRS_CH10,FRS_CH11,FRS_CH12,FRS_CH13,FRS_CH14,FRS_CH15,FRS_CH16,FRS_CH17,FRS_CH18,FRS_CH19,FRS_CH20,FRS_CH21,FRS_CH22,
}

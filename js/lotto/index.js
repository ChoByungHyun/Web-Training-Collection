import LottoMainScript from "./buylotto.js";
import Modal from "./modal.js";

const modal = new Modal();
const lottoMainScript = new LottoMainScript();

lottoMainScript.lottoScript();
modal.modalInit();

import gameState,{handleUserAction} from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  console.log("Starting The Game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if(nextTimeToTick <= now){
      gameState.tick();
      nextTimeToTick = now+TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);

  }
  requestAnimationFrame(nextAnimationFrame);
}

init();

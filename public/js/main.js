import { verifyToken } from "./verify-token.js";
import { renderLoginModal } from "./render-login-modal.js";
import { renderJoinModal } from "./render-join-modal.js";
import { renderNavbar } from "./render-navbar.js";
import { renderFooter } from "./render-footer.js";
import { addEventListenerOnLoginBtn } from "./login.js";
import { addEventListenerOnLogoutBtn } from "./logout.js";
import { addEventListenerOnJoinBtn } from "./join.js";
export * from "./useful-functions.js";
export * from "./indexedDB.js";

// 모든 페이지에서 꼭 실행되어야 하는 함수들을 호출하는 함수
// 각 html 파일에 연결된 js 파일에서 이 함수만을 불러와서 사용
async function main() {
  const verifyResult = await verifyToken();
  const { loggedInUser } = verifyResult;

  renderLoginModal();
  renderJoinModal();
  renderNavbar(loggedInUser);
  renderFooter();
  addEventListenerOnLoginBtn(loggedInUser);
  addEventListenerOnLogoutBtn(loggedInUser);
  addEventListenerOnJoinBtn(loggedInUser);

  return { loggedInUser };
}

export { main };

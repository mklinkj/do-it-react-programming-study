// 02-7 라이브러리 의존성 관리

// ES6의 라이브러리 의존성 관리 방법 알아보기
import MyMoudle from './MyModule.js'; // (1)
import { ModuleName } from './MyModule.js'; // (2)
import { ModuleName as RenameModuleName } from './MyModule.js'; // (3)

function Func() {
  MyMoudle();
}

export const CONST_VALUE = 0; // (4)
export class MyClass {} // (5)
export default new Func(); // (6)

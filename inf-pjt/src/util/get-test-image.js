import i1 from "./../assets/test/i1.png";
import i2 from "./../assets/test/i2.png";
import i3 from "./../assets/test/i3.png";
import i4 from "./../assets/test/i4.png";
import i5 from "./../assets/test/i5.png";

export function getTestImage (testImageId){
  switch (testImageId) {
    case 1: return i1;
    case 2: return i2;
    case 3: return i3;
    case 4: return i4;
    case 5: return i5;
    default: return null;
  }
}

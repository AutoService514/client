// const navAnimation = (elem) => {
//   let itemName = document.querySelectorAll(elem);
//   return (
//     (itemName.style.animation = "none"),
//     setTimeout(() => {
//       itemName.style.animation = "identifier 0.5s ease forwards";
//     }, 10)
//   );
// };
// export default navAnimation;
export default function opacityAppear(element) {
  if (element) {
    element.style.animation = "none";
    setTimeout(() => {
      element.style.animation = "animOpacity 0.5s ease forwards";
    }, 10);
  }
}
// export default function opacityDisappear(element) {
//   if (element) {
//     element.style.animation = "none";
//     setTimeout(() => {
//       element.style.animation = "animOpacity 0.5s ease forwards";
//     }, 10);
//   }
// }

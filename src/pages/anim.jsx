export default function opacityAppear(element) {
  if (element) {
    element.style.animation = "none";
    setTimeout(() => {
      element.style.animation = "animOpacity 0.5s ease forwards";
    }, 10);
  }
}

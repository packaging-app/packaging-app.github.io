export default function scrollAnimator() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "-translate-x-1");
        entry.target.classList.add(
          "opacity-100",
          "translate-x-0",
          "transition-opacity",
          "duration-700",
          "ease-in-out"
        );
      } else {
        entry.target.classList.remove("opacity-100", "translate-x-0");
        entry.target.classList.add(
          "opacity-0",
          "-translate-x-1",
          "transition-opacity",
          "duration-700",
          "ease-in-out"
        );
      }
    });
  });

  // Select the hidden elements and observe them
  const hiddenElements = document.querySelectorAll(".opacity-0");
  hiddenElements.forEach(element => {
    observer.observe(element);
  });

  // Cleanup function to unobserve elements when component unmounts
  return () => {
    hiddenElements.forEach(element => {
      observer.unobserve(element);
    });
  };
}

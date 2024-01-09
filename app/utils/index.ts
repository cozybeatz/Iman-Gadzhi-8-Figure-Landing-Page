export function togglePopupForm(e: any) {
  const popup_form: HTMLElement | Element | null =
    document.querySelector("#popup-form");

  e.preventDefault();
  popup_form?.classList.toggle("hidden");
  popup_form?.classList.toggle("animate-scale");
  document.body.classList.toggle("popup-open");
}

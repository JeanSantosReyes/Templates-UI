export const changeToggleIcon = (
    element: HTMLElement,
    elementClass: string,
    toggleIcon: HTMLElement,
    openIcon: string,
    closeIcon: string
) => {
    element?.classList.contains(elementClass)
        ? toggleIcon?.classList.replace(openIcon, closeIcon)
        : toggleIcon?.classList.replace(closeIcon, openIcon)
}
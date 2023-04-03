const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: " font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    text_dark: 'text-gray-300',
    text_normal: 'text-gray-600',
    bg_dark: 'bg-gray-900 shadow-gray-400',
    bg_normal: 'bg-[#ecf0f3] shadow-gray-400',
    navbarLink: `my-auto p-2 rounded-sm text-sm  uppercase  ml-10  hover:shadow-[#7b79c0] hover:shadow-sm hover:text-[#7b79c0] hover:ease-in-out duration-150`,
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    sidebar: 'py-4 text-sm',


};

export default styles;
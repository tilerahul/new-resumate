const Title = ({ title }) => {
    return (
        <>
            <div className="flex items-center justify-center gap-4 my-8 font-medium">
                <div className="w-16 md:w-24 lg:w-32 border-2 mt-1"></div>
                <div className="text-center text-base md:text-lg lg:text-xl">{title}</div>
                <div className="w-16 md:w-24 lg:w-32 border-2 mt-1"></div>
            </div>
        </>
    );
};

export default Title;
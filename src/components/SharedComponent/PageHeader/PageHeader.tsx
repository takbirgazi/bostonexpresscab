import { PageHeaderType } from "./PageHeaderType";

const PageHeader: React.FC<PageHeaderType> = ({ pageHeaderData }) => {
    return (
        <div style={{ background: `url("${pageHeaderData.bgImage}")`, backgroundPosition: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="h-80">
            <div className="container mx-auto max-w-[1200px] px-4 flex justify-center items-center h-full">
                <div>
                    <h1 className="text-4xl font-medium text-white text-center capitalize">{pageHeaderData.heading}</h1>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
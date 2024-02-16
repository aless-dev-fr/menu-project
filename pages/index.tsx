import Form from "@/packages/web/components/form";
import Visualiser from "@/packages/web/components/visualiser";

export default function Home()
{
    return (
        <div className="flex h-screen">
            <div className="w-screen h-full flex justify-center items-center">
                <Form />
            </div>
            <div className="w-screen h-full flex justify-center items-center">
                <Visualiser />
            </div>
        </div>
    );
}

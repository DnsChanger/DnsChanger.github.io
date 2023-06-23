import { HomePageImages } from '../../constant/imgsUrl';

export default function Screenshots()
{
    return (
        <section className='py-20'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold mb-8 text-center'>
                    تصاویر DNS Changer-Desktop
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        HomePageImages.map((imgSrc: string, index: number) =>
                            (
                                <div className='max-w-sm rounded-md overflow-hidden hover:shadow-xl transition-all'>
                                    <img src={imgSrc} alt={`Image ${index + 1}`} className='w-full' />
                                </div>
                            ))
                    }
                </div>
            </div>
        </section>
    );
}

import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";


const MyExpertise = () => {

    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get('api/expertise')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map(() => (
                            <ParagraphSkeleton className={"space-y-2 p-8"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <ExpertiseCard key={key} data={data} />
                        ))
                }

            </div>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Text Rebate</div>
            <div className="iframe-container" style={{ width: '100%', overflow: 'hidden' }}>
                <iframe 
                    src="https://app.beta.textrebates.com/partner-rebate/c97c1b3671fef2055e175ca2154d217a/portfolio-ten-theta-88.vercel.app" 
                    title="Partner Rebate Form" 
                    style={{ width: '100%', height: '500px', border: 'none' }}>
                    {/* Content inside iframe is from the src attribute */}
                </iframe>
            </div>
        </>
        
    )
}

export default MyExpertise
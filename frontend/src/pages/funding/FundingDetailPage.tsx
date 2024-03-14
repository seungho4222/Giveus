import FundingDetail from "@/components/funding/FundingDetail";
import { data } from "@/components/funding/FundingListCard/data";
import { FundingType } from "@/types/fundingType";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FundingDetailPage = () => {
  const [funding, setFunding] = useState<FundingType>();
  const { id } = useParams();

  const getFunding = () => {
    setFunding(data.filter(item => ( item.id == id))[0])
  }
  
  useEffect(() => {
    getFunding()
  }, [])

  return (
    <>
      {funding && <FundingDetail data={funding} />}
    </>
  );
};

export default FundingDetailPage;
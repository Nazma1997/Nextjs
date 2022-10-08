import {useRouter} from 'next/router';


export default function Cost(){

  const router = useRouter();
  const {productId, costId } = router.query;

  return <h1>The cost is {costId} for {productId}</h1>
}
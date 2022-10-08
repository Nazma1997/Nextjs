import {useRouter} from 'next/router';

export default function Docs(){
  
  const router = useRouter();
  const {params = []} = router.query;
  console.log(params)

  if(params.length === 1){
   return <h1>viewing docs for {params[0]} </h1>
  }
  else if(params.length === 3){
    return <h1>Viewing docs for {params[0]} , {params[1]} and {params[2]}</h1>
  }
  return <h1>Viewing Docs</h1>
}
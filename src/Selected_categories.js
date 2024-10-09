


export default function selectDist(mydata){
        
    
    let blist = [] ;
   

    for(let i=0; i<mydata.length; i++){
        
        blist.push(mydata[i].category)

    }
    console.log(blist)
    const clist = blist.filter( (item , index) => {
        if(blist.indexOf(item)===index){
            return item;
        }
    }) 
    return clist;
}
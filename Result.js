class Result
{
    constructor(psections)
    {
        this.sections=psections;
   
    }
    calc_sections_voters=()=>
    {
        let arraycalc=[];
        this.sections.map(
            s=>
            {
                let place=s.place;
                let numbervoters=s.number_votes();
                arraycalc.push({place:place,numbervoters:numbervoters});    
            }
        )
        return arraycalc;
    }
    calc_result=()=>
    {
        let arrayplacevoters=this.calc_sections_voters();
        let north=arrayplacevoters[0].numbervoters;
        let south=arrayplacevoters[1].numbervoters;
        let center=arrayplacevoters[2].numbervoters;
        if(north===south&&north===center&&center===south)
        {
            return "The 3 sections have the same number of voters";
        }
        else
        {
            if(north>south)
            {
                if(north>center)
                {
                   return "The North section has more voters: "+north;
                }
                else
                {
                    return "The Center section has more voters: "+center; 
                }
            }
            else
            {
                if(south>center)
                {
                    return "The South section has more voters: "+south; 
                }
                else
                {
                    return "The Center section has more voters: "+center; 
                }
            }
        }
    }
    
}
module.exports={Result}
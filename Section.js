class Section
{
    constructor(pplace,parrayvoters)
    {
        this.place=pplace;
        this.arrayvoters=parrayvoters;
    }
  number_votes=()=>
  {
     return  this.arrayvoters.length;
  }
}
module.exports={Section}
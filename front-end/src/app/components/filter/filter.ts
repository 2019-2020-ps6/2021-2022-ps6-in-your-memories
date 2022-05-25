import {filter} from "rxjs";

export class Filter {
  filter : String = "";
  data : String = "";

  public setFilter(filter : String | null){
    if(filter != null) {
      var tab: string[] = [];
      tab = filter.split("=");
      if (tab.length == 2) {
        this.filter = tab[0];
        this.data = tab[1];
      }
    }
  }

  getFilter(){
    return this.filter;
  }

  getData(){
    return this.data;
  }

  reset(){
    this.filter = ''
    this.data = ''
  }



}

import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem, IMember } from "../shared/data.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;
    members: Array<IMember>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
        this.getMembers();
    }

    getMembers() {
        this._itemService.getMembers()
            .subscribe((result) => {
                this.members = (<any>result).json;
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    }
}

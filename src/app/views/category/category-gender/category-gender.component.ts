import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-category-gender',
    templateUrl: './category-gender.component.html',
    styleUrls: ['./category-gender.component.scss']
})
export class CategoryGenderComponent implements OnInit {
    genders = [
        {
            gender: 'Men\'s',
        },
        {
            gender: 'Unisex',
        }
    ];

    constructor(
        private modalService: NgbModal,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
    }

}

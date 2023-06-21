import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Functionality } from '../models/functionality.model';
import { FunctionalityService } from '../services/functionality.service';


@Component({
  selector: 'app-edit-functionality',
  templateUrl: './edit-functionality.component.html',
  styleUrls: ['./edit-functionality.component.css']
})
export class EditFunctionalityComponent {
  functionalityId!: number;
  functionality!: Functionality;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private functionalityService: FunctionalityService
  ) { }

  errorMessage: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.functionalityId = Number(params.get('id'));
      this.functionalityService.getFunctionalityById(this.functionalityId).subscribe(
        functionality => {
          if (functionality) {
            this.functionality = functionality;
          } else {
            this.errorMessage = 'Functionality not found.';
          }
        }
      );
    });
  }
  

  updateFunctionality(): void {
    this.functionalityService.updateFunctionality(this.functionality);
    this.router.navigate(['/functionality-list']);
  }
}


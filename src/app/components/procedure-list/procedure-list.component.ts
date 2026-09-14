import { Component, Input, OnInit } from '@angular/core';
import { ProcedureService } from '../../services/procedure.service';
import { Procedure } from '../../models/procedure';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { ProcedureStylistsDialogComponent } from '../../dialogs/procedure-stylists-dialog/procedure-stylists-dialog.component';

@Component({
  selector: 'app-procedure-list',
  imports: [CommonModule, MatButton],
  templateUrl: './procedure-list.component.html',
  styleUrl: './procedure-list.component.css',
})
export class ProcedureListComponent implements OnInit {
  procedures: Procedure[] = [];
  @Input() salonId!: string; // semnul ! e operator de non-nullabilitate

  constructor(
    private procedureService: ProcedureService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.procedureService.getProcedures({ salonId: this.salonId }).subscribe({
      next: (data) => {
        this.procedures = data;
        console.log('proceduri:', this.procedures);
      },
    });
  }

  openDialog(selectedProcedure: Procedure) {
    this.dialog.open(ProcedureStylistsDialogComponent, {
      data: { procedure: selectedProcedure },
    });
  }
}

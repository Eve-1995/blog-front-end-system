import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { AppConfirmComponent } from '../children/confirm/confirm.component';
import { AppDialogNameComponent } from './dialog-name-prompt/dialog-name-prompt.component';
import { ClassificationService } from './classification.service';
import { Classification } from './classification.dto';

@Component({
  templateUrl: './classification.component.html',
  styleUrls: ['classification.component.scss'],
  providers: [ClassificationService],
})
export class AppClassificationComponent {
  constructor(
    private dialogService: NbDialogService,
    private classificationService: ClassificationService,
    private toastrService: NbToastrService) {
    classificationService.findBasicInfo().subscribe(value => {
      this.source.load(value);
      this.source.setPaging(1, 5);
      this.loading = false;
    });
  }
  loading = true;
  key: string;
  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: false,
    hideSubHeader: true,
    noDataMessage: '暂无数据',
    columns: {
      name: {
        title: '类别名称',
        filter: false,
      },
      articleAmount: {
        title: '文章总数',
        editable: false,
        filter: false,
      },
      likeAmount: {
        title: '点赞总数',
        editable: false,
        filter: false,
      },
      commentAmount: {
        title: '评论总数',
        editable: false,
        filter: false,
      },
    },
  };
  selectedObj = new Classification();
  onRowSelect(event) {
    this.selectedObj = event.data;
  }

  create() {
    this.dialogService.open(AppDialogNameComponent).onClose.subscribe(name => {
      if (name != null) {
        this.loading = true;
        this.classificationService.create(name).subscribe(() => {
          this.find();
          this.toastrService.show('', '添加成功', { status: NbToastStatus.SUCCESS });
        });
      }
    });
  }
  delete(): void {
    if (this.selectedObj.id === undefined) {
      this.toastrService.show('', '请选择记录', { status: NbToastStatus.WARNING });
    } else {
      this.dialogService.open(AppConfirmComponent).onClose.subscribe(value => {
        if (value === 'yes') {
          this.classificationService.delete(this.selectedObj.id).subscribe(result => {
            if (result) {
              this.toastrService.show('', '删除成功', { status: NbToastStatus.SUCCESS });
              this.find();
              this.selectedObj = new Classification();
            } else {
              this.toastrService.show('', '删除失败', { status: NbToastStatus.WARNING });
            }
          });
        }
      });
    }
  }
  edit(): void {
    if (this.selectedObj.id === undefined) {
      this.toastrService.show('', '请选择记录', { status: NbToastStatus.WARNING });
    } else {
      this.dialogService.open(AppDialogNameComponent).onClose.subscribe(name => {
        if (name != null) {
          this.loading = true;
          this.classificationService.updateClassificationName(this.selectedObj.id, name).subscribe(value => {
            if (value) {
              this.toastrService.show('', '更新成功', { status: NbToastStatus.SUCCESS });
              /* const temp = this.selectedObj;
              temp.name = name; */
              // this.source.update(this.selectedObj, temp);
              this.find();
            } else {
              this.toastrService.show('', '更新失败', { status: NbToastStatus.WARNING });
            }
          });
        }
      });
    }
  }
  find() {
    this.classificationService.findByName(this.key).subscribe(value => {
      this.source.load(value);
      this.loading = false;
    });
  }
}
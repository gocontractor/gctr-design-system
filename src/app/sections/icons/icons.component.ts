import { Component, OnInit } from '@angular/core';
import { IconsService } from '../../services/icons.service';
import { Icons } from 'src/app/models/icons';
import { ClipboardService } from 'src/app/core/clipboard/clipboard.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  providers: [IconsService]
})
export class IconsComponent implements OnInit {
  public componentName = 'IconComponent';
  public module = 'GctrIconModule';
  public showCode: boolean = false;
  public iconsList: Array<Array<Icons>> = [];

  constructor(
    private iconsService: IconsService,
    private clipboard: ClipboardService
  ) {}

  ngOnInit() {
    this.getIcons();
  }

  copyToClipboard(icon: string, iconFont: string): void {
    this.clipboard.copyToClipboard(
      `<gctr-icon icon="${icon}"${iconFont &&
        ` iconFont="${iconFont}"`}></gctr-icon>`
    );
  }

  getIcons() {
    this.iconsList.push(this.iconsService.getIcons('add', ''));
    this.iconsList.push(this.iconsService.getIcons('add_to_queue', ''));
    this.iconsList.push(this.iconsService.getIcons('arrow_drop_down', ''));
    this.iconsList.push(this.iconsService.getIcons('arrow_back', ''));
    this.iconsList.push(this.iconsService.getIcons('arrow_forward', ''));
    this.iconsList.push(this.iconsService.getIcons('block', ''));
    this.iconsList.push(this.iconsService.getIcons('book', ''));
    this.iconsList.push(this.iconsService.getIcons('cancel', ''));
    this.iconsList.push(this.iconsService.getIcons('characterbox', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('check_box', ''));
    this.iconsList.push(this.iconsService.getIcons('check_circle', ''));
    this.iconsList.push(this.iconsService.getIcons('chevron_right', ''));
    this.iconsList.push(this.iconsService.getIcons('cloud_download', ''));
    this.iconsList.push(this.iconsService.getIcons('cloud_upload', ''));
    this.iconsList.push(this.iconsService.getIcons('close', ''));
    this.iconsList.push(this.iconsService.getIcons('credit_card', ''));
    this.iconsList.push(this.iconsService.getIcons('delete', ''));
    this.iconsList.push(this.iconsService.getIcons('description', ''));
    this.iconsList.push(this.iconsService.getIcons('done', ''));
    this.iconsList.push(this.iconsService.getIcons('dotlogo', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('downward', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('drafts', ''));
    this.iconsList.push(this.iconsService.getIcons('drag_handle', ''));
    this.iconsList.push(this.iconsService.getIcons('edit', ''));
    this.iconsList.push(this.iconsService.getIcons('equalizer', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('error', ''));
    this.iconsList.push(this.iconsService.getIcons('expand_more', ''));
    this.iconsList.push(this.iconsService.getIcons('file_copy', ''));
    this.iconsList.push(this.iconsService.getIcons('filter_list', ''));
    this.iconsList.push(this.iconsService.getIcons('format_size', ''));
    this.iconsList.push(this.iconsService.getIcons('help_outline', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('home', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('image', ''));
    this.iconsList.push(this.iconsService.getIcons('important_devices', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('insert_invitation', ''));
    this.iconsList.push(this.iconsService.getIcons('keyboard_arrow_left', ''));
    this.iconsList.push(this.iconsService.getIcons('keyboard_backspace', ''));
    this.iconsList.push(this.iconsService.getIcons('line_weight', ''));
    this.iconsList.push(this.iconsService.getIcons('local_activity', ''));
    this.iconsList.push(this.iconsService.getIcons('location_on', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('mail', ''));
    this.iconsList.push(this.iconsService.getIcons('mail_outline', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('menu', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('monetization_on', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('more_vert', ''));
    this.iconsList.push(this.iconsService.getIcons('notifications_none', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('number', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('optional-empty', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('pan_tool', ''));
    this.iconsList.push(this.iconsService.getIcons('pause', ''));
    this.iconsList.push(this.iconsService.getIcons('person', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('person_add', ''));
    this.iconsList.push(this.iconsService.getIcons('photo_camera', ''));
    this.iconsList.push(this.iconsService.getIcons('play_arrow', ''));
    this.iconsList.push(this.iconsService.getIcons('publish', ''));
    this.iconsList.push(this.iconsService.getIcons('qualification', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('radio_button_checked', ''));
    this.iconsList.push(this.iconsService.getIcons('remove_circle_outline', ''));
    this.iconsList.push(this.iconsService.getIcons('settings', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('settings_backup_restore', ''));
    this.iconsList.push(this.iconsService.getIcons('save', ''));
    this.iconsList.push(this.iconsService.getIcons('star', ''));
    this.iconsList.push(this.iconsService.getIcons('star_border', ''));
    this.iconsList.push(this.iconsService.getIcons('tune', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('timelapse', ''));
    this.iconsList.push(this.iconsService.getIcons('upward', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('verified_user', 'material-outlined'));
    this.iconsList.push(this.iconsService.getIcons('view_list', ''));
    this.iconsList.push(this.iconsService.getIcons('view_module', ''));
    this.iconsList.push(this.iconsService.getIcons('visibility', ''));
    this.iconsList.push(this.iconsService.getIcons('visibility_off', ''));
    this.iconsList.push(this.iconsService.getIcons('warning', ''));
    this.iconsList.push(this.iconsService.getIcons('google', 'font-awesome-brand'));
    this.iconsList.push(this.iconsService.getIcons('facebook-f', 'font-awesome-brand'));
    this.iconsList.push(this.iconsService.getIcons('linkedin-in', 'font-awesome-brand'));
    this.iconsList.push(this.iconsService.getIcons('twitter', 'font-awesome-brand'));
    this.iconsList.push(this.iconsService.getIcons('top-empty', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('top-full', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('top-half', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('middle-empty', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('middle-full', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('middle-half', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('bottom-empty', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('bottom-full', 'gctr'));
    this.iconsList.push(this.iconsService.getIcons('bottom-half', 'gctr'));
  }
}

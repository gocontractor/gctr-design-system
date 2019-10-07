import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Documentation {
  name: string;
  kind: number;
  id: number;
  groups: Group[];
  flags: Flags;
  children: Child[];
}

export interface Group {
  title: string;
  kind: number;
  children: number[];
}

export interface Flags {
  isExported?: boolean;
}

export interface Child {
  comment?: Comment;
  children: Child[];
  type: Type;
  decorators: Decorator[];
  flags: Flags;
  groups: Group[];
  id: number;
  kind: number;
  kindString: string;
  name: string;
  getSignature?: Signature[];
  setSignature?: Signature[];
  signatures: Signature[];
  sources: Source[];
}

export interface Signature {
  comment?: Comment;
  flags: Flags;
  id: number;
  kind: number;
  kindString: string;
  name: '__set' | '__get';
  parameters: Parameter[];
  type: Type;
}

export interface Parameter {
  flags: Flags;
  id: number;
  kind: number;
  kindString: string;
  name: string;
  type: Type;
}

export interface Comment {
  shortText: string;
}

export interface Decorator {
  arguments: Arguements;
  name: string;
  type: Type;
}
export interface Arguements {
  obj: string;
}
export interface Type {
  type: 'intrinsic' | 'union' | 'EventEmitter' | string;
  name?: string;
  types: Type[];
  value: string;
  typeArguments?: Type[];
  elementType: {
    type: string;
    name: string;
  };
}

export interface Source {
  character: number;
  fileName: string;
  line: number;
}

@Injectable()
export class DocumentationService {
  private _documentation: Documentation;
  constructor(private http: HttpClient) {}
  load(): Promise<any> {
    this._documentation = null;
    return this.http
      .get<Documentation>('assets/docs.json')
      .pipe(map((res: Documentation) => res))
      .toPromise()
      .then((data: any) => (this._documentation = data))
      .catch((err: any) => Promise.resolve());
  }
  get startupData(): any {
    return this._documentation;
  }
  public getDocs(componentName: string): Child {
    return this.startupData.children.filter(x => x.name === componentName)[0];
  }
}

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IRepo } from '../../models/models';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  repo: IRepo;
}

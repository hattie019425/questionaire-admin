import { Option } from './option';

export class Question {
    _id: string
    body: string
    options: Option[] = []
}
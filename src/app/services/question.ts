import { Option } from './option';

export class Question {
    id: string
    body: string
    options: Option[] = []
}
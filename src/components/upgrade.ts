import { Data } from '../const';

export default function ({
    data,
    output,
    input
}: UpgradeParams<Data>): boolean {

    /** 1.0.0->1.0.1 */
    if (!data.tempAnnotations)
        data.tempAnnotations = [];

    return true;
}
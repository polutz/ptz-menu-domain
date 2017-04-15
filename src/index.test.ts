import { ok } from 'ptz-assert';
import { errors } from './index';

describe('ptz-menu-domain', () => {
    describe('errors', () => {
        it('exports errors', () => {
            ok(errors);
        });
    });
});

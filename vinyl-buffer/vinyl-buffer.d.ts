// Type definitions for vinyl-buffer
// Project: https://github.com/hughsk/vinyl-buffer
// Definitions by: Megan Mickelson <https://github.com/meganbit>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "vinyl-buffer" {
    function vinylBuffer(): NodeJS.ReadWriteStream;
    export = vinylBuffer;
}

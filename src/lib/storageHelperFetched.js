// const Asset = require('./Asset');
// const AssetType = require('./AssetType');
// const DataFormat = require('./DataFormat');
// const Helper = require('./Helper');

import Helper from 'scratch-storage';

class StorageHelperFetched extends Helper {
    constructor (parent) {
        super(parent);
    }

    /**
     * Fetch an asset but don't process dependencies.
     * @param {AssetType} assetType - The type of asset to fetch.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {?Promise.<Asset>} A promise for the contents of the asset.
     */
    load (assetType, assetId) {
        console.log("Test");
        return null;
    }
}

export default StorageHelperFetched;

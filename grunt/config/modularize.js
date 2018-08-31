/*jshint node: true*/

module.exports = {
  build: {
    files: [{
      expand: false,
      cwd: '<%= meta.cwd %>',
      src: ['<%= meta.source %>'],
      dest: '<%= meta.build %>'
    }],
    options: {
      // all
      "index": {
        "global": "CryptoJS",
        "exports": "CryptoJS",
        "components": ["core", "x64-core", "lib-typedarrays", "enc-base64", "cipher-core", "aes", "format-hex", "md5", "sha1", "hmac"]
      },
      "crypto-js": {
        "pack": true,
        "global": "CryptoJS",
        "exports": "CryptoJS",
        "components": ["core", "x64-core", "lib-typedarrays", "enc-base64", "cipher-core", "aes", "format-hex", "md5", "sha1", "hmac"]
      },

      // hash
      "md5": {
        "exports": "CryptoJS.MD5",
        "components": ["core", "md5"]
      },
      "sha1": {
        "exports": "CryptoJS.SHA1",
        "components": ["core", "sha1"]
      },


      // hmac hash
      "evpkdf": {
        "exports": "CryptoJS.EvpKDF",
        "components": ["core", "sha1", "hmac", "evpkdf"]
      },

      // cipher
      "aes": {
        "exports": "CryptoJS.AES",
        "components": ["core", "enc-base64", "md5", "evpkdf", "cipher-core", "aes"]
      },

      // core
      "core": {
        "exports": "CryptoJS",
        "components": ["core"],
        "global": "CryptoJS"
      },
      "x64-core": {
        "exports": "CryptoJS",
        "components": ["core", "x64-core"]
      },
      "hmac": {
        "components": ["core", "hmac"]
      },
      "cipher-core": {
        "components": ["core", "evpkdf", "cipher-core"]
      },

      // lib
      "lib-typedarrays": {
        "exports": "CryptoJS.lib.WordArray",
        "components": ["core", "lib-typedarrays"]
      },

      // format
      "format-openssl": {
        "exports": "CryptoJS.format.OpenSSL",
        "components": ["core", "cipher-core"]
      },
      "format-hex": {
        "exports": "CryptoJS.format.Hex",
        "components": ["core", "cipher-core", "format-hex"]
      },

      "enc-utf8": {
        "exports": "CryptoJS.enc.Utf8",
        "components": ["core"]
      },
      "enc-base64": {
        "exports": "CryptoJS.enc.Base64",
        "components": ["core", "enc-base64"]
      },
    }
  }
};

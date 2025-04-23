
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/



/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace fancyPlayers {

    let list: Image[] = []

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    //% myImage.shadow=screen_image_picker
    export function spriteSetup(myImage: Image, myImage2: Image, myImage3: Image, myImage4: Image) {
        list = [
            myImage,
            myImage2,
            myImage3,
            myImage4
        ]
        for (let index = 0; index <= 3; index++) {
            mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
            mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 35 + index * 35
        }
    }
    

  
}

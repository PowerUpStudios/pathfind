//%block="Pathfind" blockId="pathFind" color=#2da60b icon="\uf002"
namespace Pathfind {
    function isWall(x: number, y: number, spriteimg: Image) {
        let sprite = sprites.create(spriteimg)
        sprite.setPosition(x, y)
        const response = sprite.isHittingTile(CollisionDirection.Bottom) || sprite.isHittingTile(CollisionDirection.Left) || sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Top)
        return response
    }
    class PathFinder {
        constructor(startpos: {x: number, y: number}, endpos: {x: number, y: number}, sprite: Sprite, speed = 100) {
            const difference_x = Math.abs(endpos.x - startpos.x)
            const difference_y = Math.abs(endpos.y - startpos.y)
            sprite.setPosition(startpos.x, startpos.y)
            for (let i = 0; i < difference_x + difference_y; i++) {
                if (!isWall(sprite.x, sprite.y + 5, sprite.image) && endpos.y > sprite.y) {
                    sprite.setPosition(sprite.x, sprite.y + 1)
                    console.log(0)
                } else if (!isWall(sprite.x, sprite.y - 5, sprite.image) && endpos.y < sprite.y) {
                    sprite.setPosition(sprite.x, sprite.y + 1)
                    console.log(1)
                } else if (!isWall(sprite.x + 5, sprite.y, sprite.image) && endpos.x > sprite.x) {
                    sprite.setPosition(sprite.x + 1, sprite.y)
                    console.log(3)
                } else if (!isWall(sprite.x - 5, sprite.y, sprite.image) && endpos.x < sprite.x) {
                    sprite.setPosition(sprite.x - 1, sprite.y)
                    console.log(4)
                }
                pause(speed)
            }
        }
    }
    //%block="Set %sprite follow tile %tile with speed %speed" blockId="followTile" color=#2da60b icon="\uf002"
    export function followTile(sprite: Sprite, tile: tiles.Location, speed = 100) {
        const tilepos = {x: tile.x, y: tile.y}
        const spritepos = {x: sprite.x, y: sprite.y}
        const pathfinder = new PathFinder(spritepos, tilepos, sprite, speed)
        console.log(spritepos)
        console.log(tilepos)
    }
}
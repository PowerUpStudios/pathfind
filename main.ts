//%block="Pathfind" blockId="pathFind" color=#2da60b icon="\uf002"
namespace Pathfind {
    function isWall(x: number, y: number) {
        let sprite = sprites.create(img`
            f
        `)
        sprite.setPosition(x, y)
        return sprite.isHittingTile(CollisionDirection.Bottom) || sprite.isHittingTile(CollisionDirection.Left) || sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Top)
    }
    class PathFinder {
        constructor(startpos: {x: number, y: number}, endpos: {x: number, y: number}, sprite: Sprite) {
            const difference = (Math.abs((startpos.x + startpos.y) - (endpos.x, endpos.y)))
            sprite.setPosition(startpos.x, startpos.y)
            for (let i = 0; i < difference; i++) {
                if (!isWall(sprite.x, sprite.y + 1)) {
                    sprite.setPosition(sprite.x, sprite.y + 1)
                }else if (!isWall(sprite.x, sprite.y - 1)) {
                    sprite.setPosition(sprite.x, sprite.y + 1)
                }else if (!isWall(sprite.x + 1, sprite.y)) {
                    sprite.setPosition(sprite.x + 1, sprite.y)
                }else if (!isWall(sprite.x - 1, sprite.y)) {
                    sprite.setPosition(sprite.x - 1, sprite.y)
                }
            }
        }
    }
    //%block="Set %sprite follow tile %tile" blockId="followTile" color=#2da60b icon="\uf002"
    export function followTile(sprite: Sprite, tile: tiles.Location) {
        const tilepos = {x: tile.x, y: tile.y}
        const spritepos = {x: sprite.x, y: sprite.y}
        const pathfinder = new PathFinder(spritepos, tilepos, sprite)
        console.log(spritepos)
        console.log(tilepos)
    }
}
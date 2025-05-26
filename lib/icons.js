/** adds an icon to any */
export function icon(params = {}) {
    const classes = Array.from(params['classes'])
    create({
        tag: 'i',
        classes: classes,
        // inside, after, before ?
    })
}
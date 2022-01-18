const Card = {
    props: ["names", "values"],
    template: `
    <div class="card">
        {{names}}
        {{values}}
    </div>
    `,
    methods: {

    }
}

export {Card}
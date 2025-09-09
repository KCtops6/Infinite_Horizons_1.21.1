let crops = [
    "agave", "artichoke", "asparagus", "barley", "basil", "bean", "beetroot", "broccoli",
    "cabbage", "cactus_fruit", "candleberry", "carrot", "cauliflower", "celery", "chili_pepper",
    "chives", "cinnamon", "clover", "coffee", "corn", "cotton", "cranberry", "cucumber",
    "eggplant", "elderberry", "flax", "garlic", "ginger", "grape", "green_bean", "hops",
    "jalapeno", "kiwi", "lavender", "leek", "lemon", "lettuce", "lime", "mango", "melon_slice",
    "mint", "mustard_seeds", "okra", "olive", "onion", "orange_melon_slice", "papaya", "parsley",
    "parsnip", "peach", "peanut", "pear", "peas_pod", "peppercorns", "pineapple_slice",
    "pistachio", "plum", "pomegranate_seeds", "potato_crop", "pumpkin_slice", "radish_crop",
    "raspberry_crop", "rhubarb_stalks_item", 	"rice_crop_item","rosemary","sage","spinach",
    "strawberry_crop","sugar_cane","sunflower_seed","sweet_potato_crop","tangerine","thyme",
    "tomato_crop","turnip_crop","vanilla_beans","water_chestnut","watercress","wheat_seeds",
    "wild_rice_crop_item","zucchini"
];
ServerEvents.recipes(event => {
    crops.forEach(crop => {
        let seed = `pamhc2crops:${crop}seeditem`;
        let output = `pamhc2crops:${crop}item`;
        event.custom({
            type: "immersiveengineering:cloche",
            input: { item: seed },
            render: { type: "immersiveengineering:crop", block: `pamhc2crops:pam${crop}crop` },
            results: [{ item: output }],
            soil: { type: "minecraft:dirt" },
            time: 600
        });
    });
});
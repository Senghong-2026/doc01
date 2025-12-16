# មេរៀន HTML

សូមស្វាគមន៍មកកាន់មេរៀន HTML ពេញលេញ! រៀនរបៀបរៀបចំរចនាសម្ព័ន្ធគេហទំព័រពីដំបូង។

## តើ HTML ជាអ្វី?

HTML (HyperText Markup Language) គឺជាភាសាស្តង់ដារសម្រាប់បង្កើតគេហទំព័រ។ វាពណ៌នាអំពីរចនាសម្ព័ន្ធនៃគេហទំព័រដោយប្រើ markup elements។

```html
<!DOCTYPE html>
<html>
<head>
    <title>ទំព័រដំបូងរបស់ខ្ញុំ</title>
</head>
<body>
    <h1>សួស្តី ពិភពលោក!</h1>
    <p>សូមស្វាគមន៍មកកាន់ HTML!</p>
</body>
</html>
```

## រចនាសម្ព័ន្ធមេរៀន

### កម្រិតដំបូង
- [មូលដ្ឋាន](/km/guide/html/01-basics) - រចនាសម្ព័ន្ធ HTML និង Elements
- [អត្ថបទ](/km/guide/html/02-text) - ការធ្វើទម្រង់អត្ថបទ និងពុម្ពអក្សរ
- [តំណភ្ជាប់ និងរូបភាព](/km/guide/html/03-links-images) - Hyperlinks និងរូបភាព

### កម្រិតមធ្យម
- [បញ្ជី និងតារាង](/km/guide/html/04-lists-tables) - ការរៀបចំទិន្នន័យ
- [ទម្រង់បែបបទ](/km/guide/html/05-forms) - ការបញ្ចូលទិន្នន័យអ្នកប្រើប្រាស់
- [Semantic HTML](/km/guide/html/06-semantic) - Markup ដែលមានអត្ថន័យ

### កម្រិតខ្ពស់
- [មេឌៀ](/km/guide/html/07-media) - អូឌីយ៉ូ វីដេអូ និងមេឌៀផ្សេងៗ
- [មុខងារកម្រិតខ្ពស់](/km/guide/html/08-advanced) - Meta Tags SEO និងការអនុវត្តល្អបំផុត

## តម្រូវការមុន

- កម្មវិធីកែសម្រួលអត្ថបទ (VS Code ត្រូវបានណែនាំ)
- កម្មវិធីរុករកគេហទំព័រ (Chrome, Firefox, Safari, ឬ Edge)
- មិនត្រូវការបទពិសោធន៍សរសេរកម្មវិធីពីមុនទេ!

## ចាប់ផ្តើម

### បង្កើតឯកសារ HTML ដំបូងរបស់អ្នក

1. បើកកម្មវិធីកែសម្រួលអត្ថបទរបស់អ្នក
2. បង្កើតឯកសារថ្មីឈ្មោះ `index.html`
3. វាយកូដខាងក្រោម៖

```html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>គេហទំព័រដំបូងរបស់ខ្ញុំ</title>
</head>
<body>
    <h1>សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់ខ្ញុំ</h1>
    <p>នេះគឺជាទំព័រ HTML ដំបូងរបស់ខ្ញុំ!</p>
</body>
</html>
```

4. រក្សាទុកឯកសារ
5. បើកវានៅក្នុងកម្មវិធីរុករកគេហទំព័ររបស់អ្នក

::: tip គន្លឹះ
អ្នកអាចបើកឯកសារ HTML ដោយផ្ទាល់នៅក្នុងកម្មវិធីរុករកដោយចុចពីរដងលើវា ឬអូសវាទៅក្នុងបង្អួចកម្មវិធីរុករក។
:::

## របៀបដែល HTML ដំណើរការ

HTML ប្រើ **tags** ដើម្បី mark up ខ្លឹមសារ៖

```html
<tagname>ខ្លឹមសារនៅទីនេះ</tagname>
```

- Tags ជាធម្មតាមកជាគូ៖ opening `<tag>` និង closing `</tag>`
- Tags មួយចំនួនបិទដោយខ្លួនឯង៖ `<img />`, `<br />`, `<hr />`
- Tags អាចមាន **attributes** ដែលផ្តល់ព័ត៌មានបន្ថែម

```html
<a href="https://example.com">ចុចទីនេះ</a>
<img src="image.jpg" alt="ការពិពណ៌នា" />
```

## រចនាសម្ព័ន្ធឯកសារ HTML

ឯកសារ HTML គ្រប់ប្រភេទមានរចនាសម្ព័ន្ធមូលដ្ឋាននេះ៖

```html
<!DOCTYPE html>
<html lang="km">
<head>
    <!-- Metadata នៅទីនេះ -->
    <meta charset="UTF-8">
    <title>ចំណងជើងទំព័រ</title>
</head>
<body>
    <!-- ខ្លឹមសារដែលមើលឃើញនៅទីនេះ -->
</body>
</html>
```

| Element | គោលបំណង |
|---------|---------|
| `<!DOCTYPE html>` | ប្រកាសប្រភេទឯកសារ HTML5 |
| `<html>` | Element ឫសនៃទំព័រ |
| `<head>` | មាន metadata (មិនបង្ហាញ) |
| `<body>` | មានខ្លឹមសារទំព័រដែលមើលឃើញ |

ចូរចាប់ផ្តើមដំណើរ HTML របស់អ្នក!

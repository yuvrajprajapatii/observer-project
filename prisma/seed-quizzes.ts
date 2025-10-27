// prisma/seed-quizzes.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting quiz seed...')

  // Create Learning Path
  const webDevPath = await prisma.learningPath.create({
    data: {
      title: 'Web Development Fundamentals',
      description: 'Master the basics of web development with HTML, CSS, and JavaScript',
      category: 'Web Development',
      difficulty: 'BEGINNER',
      duration: 40,
      thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
      tags: ['HTML', 'CSS', 'JavaScript', 'Web'],
      isPublished: true
    }
  })

  console.log('✅ Created Learning Path:', webDevPath.title)

  // Create Module
  const htmlModule = await prisma.module.create({
    data: {
      pathId: webDevPath.id,
      title: 'HTML Basics',
      description: 'Learn the fundamentals of HTML markup',
      order: 1,
      duration: 120
    }
  })

  console.log('✅ Created Module:', htmlModule.title)

  // Create Quiz 1: HTML Basics
  const htmlQuiz = await prisma.quiz.create({
    data: {
      moduleId: htmlModule.id,
      title: 'HTML Fundamentals Quiz',
      description: 'Test your knowledge of HTML basics',
      timeLimit: 10,
      passingScore: 70,
      order: 1,
      isPublished: true,
      questions: {
        create: [
          {
            question: 'What does HTML stand for?',
            type: 'MULTIPLE_CHOICE',
            options: [
              'Hyper Text Markup Language',
              'High Tech Modern Language',
              'Home Tool Markup Language',
              'Hyperlinks and Text Markup Language'
            ],
            correctAnswer: 'Hyper Text Markup Language',
            explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.',
            points: 1,
            order: 1
          },
          {
            question: 'Which HTML tag is used to define the largest heading?',
            type: 'MULTIPLE_CHOICE',
            options: ['<h1>', '<h6>', '<heading>', '<head>'],
            correctAnswer: '<h1>',
            explanation: 'The <h1> tag defines the most important heading. <h6> defines the least important heading.',
            points: 1,
            order: 2
          },
          {
            question: 'HTML tags are case-sensitive.',
            type: 'TRUE_FALSE',
            options: null,
            correctAnswer: 'False',
            explanation: 'HTML tags are NOT case-sensitive. However, it is best practice to use lowercase tags.',
            points: 1,
            order: 3
          },
          {
            question: 'Which tag is used to create a hyperlink?',
            type: 'MULTIPLE_CHOICE',
            options: ['<a>', '<link>', '<href>', '<url>'],
            correctAnswer: '<a>',
            explanation: 'The <a> tag (anchor tag) is used to create hyperlinks in HTML.',
            points: 1,
            order: 4
          },
          {
            question: 'What is the correct HTML element for inserting a line break?',
            type: 'MULTIPLE_CHOICE',
            options: ['<br>', '<break>', '<lb>', '<newline>'],
            correctAnswer: '<br>',
            explanation: 'The <br> tag is used to insert a single line break in HTML.',
            points: 1,
            order: 5
          }
        ]
      }
    },
    include: { questions: true }
  })

  console.log('✅ Created Quiz:', htmlQuiz.title, `with ${htmlQuiz.questions.length} questions`)

  // Create CSS Module
  const cssModule = await prisma.module.create({
    data: {
      pathId: webDevPath.id,
      title: 'CSS Fundamentals',
      description: 'Style your web pages with CSS',
      order: 2,
      duration: 150
    }
  })

  console.log('✅ Created Module:', cssModule.title)

  // Create Quiz 2: CSS Basics
  const cssQuiz = await prisma.quiz.create({
    data: {
      moduleId: cssModule.id,
      title: 'CSS Styling Quiz',
      description: 'Test your CSS knowledge',
      timeLimit: 15,
      passingScore: 75,
      order: 1,
      isPublished: true,
      questions: {
        create: [
          {
            question: 'What does CSS stand for?',
            type: 'MULTIPLE_CHOICE',
            options: [
              'Cascading Style Sheets',
              'Creative Style System',
              'Computer Style Sheets',
              'Colorful Style Sheets'
            ],
            correctAnswer: 'Cascading Style Sheets',
            explanation: 'CSS stands for Cascading Style Sheets, used to style and layout web pages.',
            points: 1,
            order: 1
          },
          {
            question: 'Which property is used to change the background color?',
            type: 'MULTIPLE_CHOICE',
            options: ['background-color', 'bgcolor', 'color-background', 'background'],
            correctAnswer: 'background-color',
            explanation: 'The background-color property sets the background color of an element.',
            points: 1,
            order: 2
          },
          {
            question: 'CSS can be written inside an HTML document.',
            type: 'TRUE_FALSE',
            options: null,
            correctAnswer: 'True',
            explanation: 'CSS can be written inline, in the <style> tag, or in an external stylesheet.',
            points: 1,
            order: 3
          },
          {
            question: 'How do you select an element with id "header" in CSS?',
            type: 'MULTIPLE_CHOICE',
            options: ['#header', '.header', 'header', '*header'],
            correctAnswer: '#header',
            explanation: 'In CSS, # is used to select elements by their ID.',
            points: 1,
            order: 4
          },
          {
            question: 'Which property is used to change text color?',
            type: 'MULTIPLE_CHOICE',
            options: ['color', 'text-color', 'font-color', 'text'],
            correctAnswer: 'color',
            explanation: 'The color property is used to set the color of text.',
            points: 1,
            order: 5
          },
          {
            question: 'What is the default value of the position property?',
            type: 'MULTIPLE_CHOICE',
            options: ['static', 'relative', 'absolute', 'fixed'],
            correctAnswer: 'static',
            explanation: 'The default value of the position property is static.',
            points: 1,
            order: 6
          }
        ]
      }
    },
    include: { questions: true }
  })

  console.log('✅ Created Quiz:', cssQuiz.title, `with ${cssQuiz.questions.length} questions`)

  // Create JavaScript Module
  const jsModule = await prisma.module.create({
    data: {
      pathId: webDevPath.id,
      title: 'JavaScript Basics',
      description: 'Learn programming with JavaScript',
      order: 3,
      duration: 180
    }
  })

  console.log('✅ Created Module:', jsModule.title)

  // Create Quiz 3: JavaScript
  const jsQuiz = await prisma.quiz.create({
    data: {
      moduleId: jsModule.id,
      title: 'JavaScript Essentials Quiz',
      description: 'Test your JavaScript programming skills',
      timeLimit: 20,
      passingScore: 70,
      order: 1,
      isPublished: true,
      questions: {
        create: [
          {
            question: 'Which keyword is used to declare a variable in JavaScript?',
            type: 'MULTIPLE_CHOICE',
            options: ['var', 'variable', 'v', 'dim'],
            correctAnswer: 'var',
            explanation: 'var, let, and const are all used to declare variables in JavaScript.',
            points: 1,
            order: 1
          },
          {
            question: 'JavaScript is the same as Java.',
            type: 'TRUE_FALSE',
            options: null,
            correctAnswer: 'False',
            explanation: 'JavaScript and Java are completely different languages.',
            points: 1,
            order: 2
          },
          {
            question: 'How do you write a comment in JavaScript?',
            type: 'MULTIPLE_CHOICE',
            options: ['// This is a comment', '<!-- This is a comment -->', '# This is a comment', '/* This is a comment'],
            correctAnswer: '// This is a comment',
            explanation: 'Single-line comments use // and multi-line comments use /* */',
            points: 1,
            order: 3
          },
          {
            question: 'Which operator is used to assign a value to a variable?',
            type: 'MULTIPLE_CHOICE',
            options: ['=', '==', '===', ':'],
            correctAnswer: '=',
            explanation: 'The = operator is used for assignment in JavaScript.',
            points: 1,
            order: 4
          }
        ]
      }
    },
    include: { questions: true }
  })

  console.log('✅ Created Quiz:', jsQuiz.title, `with ${jsQuiz.questions.length} questions`)

  console.log('\n🎉 Quiz seed completed successfully!')
  console.log(`📊 Summary:`)
  console.log(`   - 1 Learning Path`)
  console.log(`   - 3 Modules`)
  console.log(`   - 3 Quizzes`)
  console.log(`   - 15 Questions total`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

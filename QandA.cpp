#include <iostream>
#include <thread>
#include <chrono>
#include <vector>
#include <algorithm> // For shuffling
#include <random>    // For random number generation

using namespace std;

struct Question {
    string questionText;
    string answer;
};

void countdown(int seconds) {
    for (int i = seconds; i > 0; --i) {
        cout << i << "..." << flush;
        this_thread::sleep_for(chrono::seconds(1));
    }
    cout << endl;
}

void askQuestion(const Question& q) {
    cout << q.questionText << endl;
    cout << "You have 5 seconds to answer." << endl;
    countdown(5);
    cout << "Time's up! The correct answer is: " << q.answer << endl << endl;
}

int main() {
    vector<Question> questions = {
        // Basic Computer Parts (5 basic questions)
        {"What is the brain of the computer?", "CPU"},
        {"Which part of the computer stores data long-term?", "Hard Drive"},
        {"What component is used to cool the CPU?", "CPU Cooler"},
        {"Which device is used to display output from the computer?", "Monitor"},
        {"What is the main circuit board of a computer?", "Motherboard"},

        // Scientists related to computing (5 questions)
        {"Who is known as the father of computers?", "Charles Babbage"},
        {"Who is considered the first computer programmer?", "Ada Lovelace"},
        {"Was the first computer programmer a boy or a girl?", "Girl"},
        {"Who invented the World Wide Web?", "Tim Berners-Lee"},
        {"Who is known for creating the first algorithm intended to be processed by a machine?", "Ada Lovelace"},

        // Common Software and Services (10 questions)
        {"Which software is used to create spreadsheets?", "Excel"},
        {"Which software is commonly used to write documents?", "Word"},
        {"Which search engine is the most popular?", "Google"},
        {"Which software is used for creating presentations?", "PowerPoint"},
        {"Which cloud storage service is offered by Google?", "Google Drive"},
        {"Which platform is used for social networking?", "Facebook"},
        {"Which app is popular for short video content?", "TikTok"},
        {"Which AI chatbot is widely used for generating text?", "ChatGPT"},
        {"Which AI tool is used for generating images from text prompts?", "Bing Designer"},
        {"Which app is used for sending instant messages?", "Messenger"},

        // Tech Logos (10 questions)
        {"Guess the logo: A green rectangle with an X in it.", "Microsoft Excel"},
        {"Guess the logo: A four-colored window.", "Microsoft Windows"},
        {"Guess the logo: A lightbulb with a cloud around it.", "Microsoft Azure"},
        {"Guess the logo: A speech bubble with a GPT in it.", "ChatGPT"},
        {"Guess the logo: A triangle with a play button in it.", "YouTube"},
        {"Guess the logo: A 'G' on a white background.", "Google"},
        {"Guess the logo: A lowercase 'b' with three dots around it.", "Bing AI"},
        {"Guess the logo: A video camera with a triangle inside it.", "Google Meet"},
        {"Guess the logo: A shopping cart with a play button.", "Google Play"},
        {"Guess the logo: A gear with a play button.", "Google Settings"},

        // Computer Keyboard Shortcuts (5 questions)
        {"What does Ctrl + C do?", "Copy"},
        {"What does Ctrl + V do?", "Paste"},
        {"What does Ctrl + X do?", "Cut"},
        {"What does Ctrl + Z do?", "Undo"},
        {"What does Ctrl + A do?", "Select All"},

        // General Technology (15 questions with acronyms and common terms)
        {"What does AI stand for?", "Artificial Intelligence"},
        {"What does QR stand for in QR code?", "Quick Response"},
        {"What does SMS stand for?", "Short Message Service"},
        {"What does HTTP stand for?", "HyperText Transfer Protocol"},
        {"What does URL stand for?", "Uniform Resource Locator"},
        {"What does PIN stand for?", "Personal Identification Number"},
        {"What does IP stand for in IP address?", "Internet Protocol"},
        {"What does USB stand for?", "Universal Serial Bus"},
        {"What does LED stand for?", "Light Emitting Diode"},
        {"What does PNG stand for?", "Portable Network Graphics"},
        {"What does VPN stand for?", "Virtual Private Network"},
        {"What does Wi-Fi stand for?", "Wireless Fidelity"},
        {"What does JPEG stand for?", "Joint Photographic Experts Group"},
        {"What does MAC stand for in MAC address?", "Media Access Control"},
        {"What does WWW stand for?", "World Wide Web"}
    };

    // Shuffle the questions
    random_device rd;
    mt19937 g(rd());
    shuffle(questions.begin(), questions.end(), g);

    int choice;
    while (true) {
        cout << "Choose a question number (1-50) or 0 to quit: ";
        cin >> choice;

        if (choice == 0) {
            break;
        }

        if (choice >= 1 && choice <= 50) {
            askQuestion(questions[choice - 1]);
        } else {
            cout << "Invalid choice. Please choose a number between 1 and 50." << endl;
        }
    }

    cout << "Thank you for playing!" << endl;
    return 0;
}

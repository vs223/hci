#include <Servo.h>


Servo arm;
int pos = 40;
int armFlag = 0;
int goalPos = 40;
int fsrValue =0;

int ledPin = 11;
int potValue;
int ledValue;

int photoValue;
int oldPhotoValue = 0;


void setup() {
  // put your setup code here, to run once:
  arm.attach(4);
  pinMode(ledPin, OUTPUT);

}

void loop() {
  
  fsrValue = analogRead(A4);
  if(fsrValue > 128){
    armFlag = 1;    
  }

  potValue = analogRead(A0);
  ledValue = map(potValue, 0, 1023, 0, 255);
  analogWrite(ledPin, ledValue);

   
  photoValue = analogRead(A1);
  if(photoValue < 350 && oldPhotoValue >= 350){
    for(int i =0; i <6; i++){
      analogWrite(ledPin, 255);
      delay(100);
      analogWrite(ledPin, 0);
      delay(100);
    }
  }
  oldPhotoValue = photoValue;
  
  if(pos == 130){
    goalPos=40;
    armFlag = 0;
  }
  if(pos==40 && armFlag ==1){
    goalPos = 130;
    armFlag = 0;
  }
  if(pos != goalPos){
    pos += (goalPos - pos > 0)? 1:-1;
  }

  arm.write(pos);
  delay(15);
}

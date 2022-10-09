# compile trois fichiers hello1.c, hello2.c et hello3.c

all: hello1 hello2 hello3

hello1: hello1.c
	gcc -o hello1 hello1.c

hello2: hello2.c
	gcc -o hello2 hello2.c

hello3: hello3.c	
	gcc -o hello3 hello3.c

clean:	
	rm -f hello1 hello2 hello3

# End of Makefile
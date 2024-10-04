
package 

import org.junit.Test;

import static org.junit.Assert.*;
import static PasswordUtil.SecurityLevel.WEAK;

public class PasswordUtilTest {


    @Test
    public void weak_when_has_less_than_8_letters(){

        assertEquals(WEAK,PasswordUtil.SecurityLevel.WEAK, PasswordUtil.assessPassword("1234")) ;  

    }

}

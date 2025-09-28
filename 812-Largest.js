/*#include <iostream>
#include <vector>
#include <cmath>    // لاستخدام دالة std::abs
#include <algorithm> // لاستخدام دالة std::max

class Solution {
public:
    double largestTriangleArea(std::vector<std::vector<int>>& points) {
        int n = points.size();
        double maxArea = 0.0;

        // المرور على جميع التوليفات الممكنة لثلاث نقاط مختلفة
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                for (int k = j + 1; k < n; ++k) {
                    
                    // استخراج إحداثيات النقاط الثلاث
                    // points[i][0] هو إحداثي x للنقطة i
                    // points[i][1] هو إحداثي y للنقطة i
                    double x1 = points[i][0];
                    double y1 = points[i][1];

                    double x2 = points[j][0];
                    double y2 = points[j][1];

                    double x3 = points[k][0];
                    double y3 = points[k][1];

                    // حساب مساحة المثلث باستخدام الصيغة
                    // نستخدم std::abs للحصول على القيمة المطلقة لأن المساحة دائمًا موجبة
                    double currentArea = 0.5 * std::abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

                    // تحديث المساحة القصوى إذا كانت المساحة الحالية أكبر
                    maxArea = std::max(maxArea, currentArea);
                }
            }
        }

        return maxArea;
    }
};

// --- دالة main لاختبار الحل ---
int main() {
    Solution sol;

    // المثال الأول
    std::vector<std::vector<int>> points1 = {{0,0}, {0,1}, {1,0}, {0,2}, {2,0}};
    double result1 = sol.largestTriangleArea(points1);
    std::cout << "Example 1 Output: " << result1 << std::endl; // المتوقع: 2.0

    // المثال الثاني
    std::vector<std::vector<int>> points2 = {{1,0}, {0,0}, {0,1}};
    double result2 = sol.largestTriangleArea(points2);
    std::cout << "Example 2 Output: " << result2 << std::endl; // المتوقع: 0.5

    return 0;
}*/